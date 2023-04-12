import {useMutation} from '@tanstack/react-query';
import {apiClient, queryClient} from '@common/http/query-client';
import {useTrans} from '@common/i18n/use-trans';
import {BackendResponse} from '@common/http/backend-response/backend-response';
import {message} from '@common/i18n/message';
import {toast} from '@common/ui/toast/toast';
import {CrupdatePixelFormValue} from '@app/dashboard/tracking-pixels/crupdate-dialog/crupdate-pixel-form';
import {PaginatedResourcesQueryKey} from '@common/datatable/requests/paginated-resources';
import {UseFormReturn} from 'react-hook-form';
import {onFormQueryError} from '@common/errors/on-form-query-error';

interface Response extends BackendResponse {}

export function useUpdatePixel(
  pixelId: number,
  form: UseFormReturn<CrupdatePixelFormValue>
) {
  const {trans} = useTrans();
  return useMutation(
    (props: CrupdatePixelFormValue) => createPixel(pixelId, props),
    {
      onSuccess: () => {
        toast.positive(trans(message('Pixel updated')));
        queryClient.invalidateQueries(PaginatedResourcesQueryKey('tp'));
      },
      onError: err => onFormQueryError(err, form),
    }
  );
}

function createPixel(
  pixelId: number,
  payload: CrupdatePixelFormValue
): Promise<Response> {
  return apiClient.put(`tp/${pixelId}`, payload).then(r => r.data);
}

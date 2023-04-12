import {WidgetRendererProps} from '@app/dashboard/biolink/biolink-editor/content/widgets/types/widget-renderer-props';
import {SoundcloudWidget} from '@app/dashboard/biolink/biolink-editor/content/widgets/soundcloud-widget/soundcloud-widget-dialog';
import {VideoEmbedWidgetRenderer} from '@app/dashboard/biolink/biolink-editor/content/widgets/video-embed-widget-renderer';

export function SoundcloudWidgetRenderer({
  widget,
  variant,
}: WidgetRendererProps<SoundcloudWidget>) {
  if (!widget.config.url) return null;
  return (
    <VideoEmbedWidgetRenderer
      variant={variant}
      embedUrl={widget.config.embedUrl}
    />
  );
}

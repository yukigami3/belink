import {WidgetRendererProps} from '@app/dashboard/biolink/biolink-editor/content/widgets/types/widget-renderer-props';
import getVideoId from 'get-video-id';
import {VimeoWidget} from '@app/dashboard/biolink/biolink-editor/content/widgets/vimeo-widget/vimeo-widget-dialog';
import {VideoEmbedWidgetRenderer} from '@app/dashboard/biolink/biolink-editor/content/widgets/video-embed-widget-renderer';

export function VimeoWidgetRenderer({
  widget,
  variant,
}: WidgetRendererProps<VimeoWidget>) {
  if (!widget.config.url) return null;

  const {id} = getVideoId(widget.config.url);
  const embedUrl = `https://player.vimeo.com/video/${id}`;
  return <VideoEmbedWidgetRenderer variant={variant} embedUrl={embedUrl} />;
}

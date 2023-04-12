import {WidgetRendererProps} from '@app/dashboard/biolink/biolink-editor/content/widgets/types/widget-renderer-props';
import {YoutubeWidget} from '@app/dashboard/biolink/biolink-editor/content/widgets/youtube-widget/youtube-widget-dialog';
import getVideoId from 'get-video-id';
import {VideoEmbedWidgetRenderer} from '@app/dashboard/biolink/biolink-editor/content/widgets/video-embed-widget-renderer';

export function YoutubeWidgetRenderer({
  widget,
  variant,
}: WidgetRendererProps<YoutubeWidget>) {
  if (!widget.config.url) return null;

  const {id} = getVideoId(widget.config.url);
  const embedUrl = `https://www.youtube.com/embed/${id}`;
  return <VideoEmbedWidgetRenderer variant={variant} embedUrl={embedUrl} />;
}

from youtube_transcript_api import YouTubeTranscriptApi

# the base class to inherit from when creating your own formatter
from youtube_transcript_api.formatters import Formatter
# some provided subclasses, each outputs a different string format.
from youtube_transcript_api.formatters import JSONFormatter
from youtube_transcript_api.formatters import TextFormatter

video_id = "";


transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['hi'])

formatter = TextFormatter()

text_formatted = formatter.format_transcript(transcript)

print(text_formatted)



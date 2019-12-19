export type WordPressAttachment = {
  id: number,
  date: string,
  title: {
    rendered: string,
  },
  media_details: {
    width: number,
    height: number,
    sizes: {
      small: {
        mime_type: string,
        source_url: string,
      },
      medium: {
        mime_type: string,
        source_url: string,
      },
      medium_large: {
        mime_type: string,
        source_url: string,
      },
      hero: {
        mime_type: string,
        source_url: string,
      },
      full: {
        mime_type: string,
        source_url: string,
      },
    },
  },
};
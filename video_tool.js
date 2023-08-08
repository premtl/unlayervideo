unlayer.registerTool({
  name: 'video_tool',
  label: 'Video',
  icon: 'fa-video',
  supportedDisplayModes: ['web', 'email'],
  options: {
    videoUrl: {
      title: 'Video URL',
      position: 1,
      options: {
        url: {
          label: 'Video URL',
          widget: 'url',
          defaultValue: 'https://www.youtube.com/watch?v=your_video_id',
        },
      },
    },
    videoThumbnail: {
      title: 'Video Thumbnail',
      position: 2,
      options: {
        thumbnailUrl: {
          label: 'Thumbnail URL',
          widget: 'image',
          defaultValue: 'https://example.com/your_thumbnail.jpg',
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `
          <div style="position: relative;">
            <video
              controls
              style="width: 100%; max-width: 100%; height: auto;"
            >
              <source src="${values.videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <img
              src="${values.videoThumbnail}"
              alt="Video Thumbnail"
              style="position: absolute; top: 0; left: 0; width: 100%; height: auto;"
            />
          </div>
        `;
      },
    }),
    exporters: {
      web: function (values) {
        return `
          <div style="position: relative;">
            <video
              controls
              style="width: 100%; max-width: 100%; height: auto;"
            >
              <source src="${values.videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <img
              src="${values.videoThumbnail}"
              alt="Video Thumbnail"
              style="position: absolute; top: 0; left: 0; width: 100%; height: auto;"
            />
          </div>
        `;
      },
      email: function (values) {
        return `
          <div style="position: relative;">
            <video
              controls
              style="width: 100%; max-width: 100%; height: auto;"
            >
              <source src="${values.videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <img
              src="${values.videoThumbnail}"
              alt="Video Thumbnail"
              style="position: absolute; top: 0; left: 0; width: 100%; height: auto;"
            />
          </div>
        `;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

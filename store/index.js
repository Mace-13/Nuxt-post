export const state = () => {
  return {
    posts: [
      {
        id: '1',
        title: 'My first post',
        subtitle: 'My first subtitle',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque, lectus nec egestas egestas, nisi neque convallis orci, at finibus lacus justo ac est. Praesent consectetur quam quam, non pulvinar.',
        createdAt: new Date (),
        isRead: false
      },
      {
        id: '2',
        title: 'My second post',
        subtitle: 'My second subtitle',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ante nunc, eu imperdiet lorem hendrerit sit amet. Fusce eu ligula sed quam fringilla iaculis. Vivamus dapibus nisl id mauris accumsan, id posuere ante feugiat. Nunc accumsan vulputate est. Praesent semper odio lectus, ut vulputate mi finibus sed. Sed at.',
        createdAt: new Date (),
        isRead: false
      }
    ]
  }
}

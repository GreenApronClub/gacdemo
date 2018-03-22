export default function() {
  return {
    login: {
        primaryButton: {
                  title: 'login',
                  primaryActive: true
                },
        secondaryButton: {
                    title: 'signup',
                    secondaryActive: false
                  }
      },
   signup: {
       primaryButton: {
                 title: 'login',
                 primaryActive: false
              },
       secondaryButton: {
                 title: 'signup',
                 secondaryActive: true
              }
      }
  }
}

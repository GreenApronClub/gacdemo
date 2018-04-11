export default function() {
  return {
    login: {
        primaryButton: {
                title: 'login',
                primaryRoute: '/login',
                primaryActive: true
              },
        secondaryButton: {
                title: 'signup',
                secondaryRoute: '/signup',
                secondaryActive: false
              }
      },
   signup: {
       primaryButton: {
                title: 'login',
                primaryRoute: '/login',
                primaryActive: false
              },
       secondaryButton: {
                title: 'signup',
                secondaryRoute: '/signup',
                secondaryActive: true
              }
      },
    activeOrders: {
        primaryButton: {
                title: 'active orders',
                primaryRoute: '/active-orders',
                primaryActive: true
              },
        secondaryButton: {
                title: 'manage strains',
                secondaryRoute: '/manage-strains',
                secondaryActive: false
             }
      },
    manageStrains: {
        primaryButton: {
                title: 'active orders',
                primaryRoute: '/active-orders',
                primaryActive: false
              },
        secondaryButton: {
                title: 'manage strains',
                secondaryRoute: '/manage-strains',
                secondaryActive: true
             }
        }
  }
}

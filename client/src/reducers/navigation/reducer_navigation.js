export default function() {
  return {
    login: {
        primaryButton: {
                title: 'login',
                primaryRoute: '/login',
              },
        secondaryButton: {
                title: 'signup',
                secondaryRoute: '/signup',
              }
      },
   signup: {
       primaryButton: {
                title: 'login',
                primaryRoute: '/login',
              },
       secondaryButton: {
                title: 'signup',
                secondaryRoute: '/signup',
              }
      },
    activeOrders: {
        primaryButton: {
                title: 'active orders',
                primaryRoute: '/active-orders',
              },
        secondaryButton: {
                title: 'manage strains',
                secondaryRoute: '/manage-strains',
             }
      },
    manageStrains: {
        primaryButton: {
                title: 'active orders',
                primaryRoute: '/active-orders',
              },
        secondaryButton: {
                title: 'manage strains',
                secondaryRoute: '/manage-strains',
             }
        }
  }
}

export function getNavData(currentPath, props) {
    var primaryTitle , secondaryTitle = '';
    var primaryRoute, secondaryRoute = '';
    switch(currentPath) {
      case '/signup':
        primaryTitle = props.route.signup.primaryButton.title;
        secondaryTitle = props.route.signup.secondaryButton.title;
        primaryRoute = props.route.signup.primaryButton.primaryRoute;
        secondaryRoute = props.route.signup.secondaryButton.secondaryRoute;
        break;
      case '/login':
        primaryTitle = props.route.login.primaryButton.title;
        secondaryTitle = props.route.login.secondaryButton.title;
        primaryRoute = props.route.login.primaryButton.primaryRoute;
        secondaryRoute = props.route.login.secondaryButton.secondaryRoute;
          break;
      case '/active-orders':
        primaryTitle = props.route.activeOrders.primaryButton.title;
        secondaryTitle = props.route.activeOrders.secondaryButton.title;
        primaryRoute = props.route.activeOrders.primaryButton.primaryRoute;
        secondaryRoute = props.route.activeOrders.secondaryButton.secondaryRoute;
          break;
      case '/manage-strains':
      case '/manage-strains/add':
      case '/manage-strains/:strainId':
        primaryTitle = props.route.manageStrains.primaryButton.title;
        secondaryTitle = props.route.manageStrains.secondaryButton.title;
        primaryRoute = props.route.manageStrains.primaryButton.primaryRoute;
        secondaryRoute = props.route.manageStrains.secondaryButton.secondaryRoute;
          break;
        default:
          primaryTitle = 'Active orders';
          secondaryTitle = 'Manage orders';
    }
    return [primaryTitle, secondaryTitle, primaryRoute, secondaryRoute];
}

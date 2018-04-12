import classNames from 'classnames';

export function getNavData(currentPath, props) {
    var primaryTitle , secondaryTitle = '';
    var primaryActive , secondaryActive = '';
    var primaryRoute, secondaryRoute = '';
    switch(currentPath) {
      case '/signup':
        primaryTitle = props.route.signup.primaryButton.title;
        secondaryTitle = props.route.signup.secondaryButton.title;
        primaryActive = props.route.signup.primaryButton.primaryActive;
        secondaryActive = props.route.signup.secondaryButton.secondaryActive;
        primaryRoute = props.route.signup.primaryButton.primaryRoute;
        secondaryRoute = props.route.signup.secondaryButton.secondaryRoute;
        break;
      case '/login':
        primaryTitle = props.route.login.primaryButton.title;
        secondaryTitle = props.route.login.secondaryButton.title;
        primaryActive = props.route.login.primaryButton.primaryActive;
        secondaryActive = props.route.login.secondaryButton.secondaryActive;
        primaryRoute = props.route.login.primaryButton.primaryRoute;
        secondaryRoute = props.route.login.secondaryButton.secondaryRoute;
          break;
      case '/active-orders':
        primaryTitle = props.route.activeOrders.primaryButton.title;
        secondaryTitle = props.route.activeOrders.secondaryButton.title;
        primaryActive = props.route.activeOrders.primaryButton.primaryActive;
        secondaryActive = props.route.activeOrders.secondaryButton.secondaryActive;
        primaryRoute = props.route.activeOrders.primaryButton.primaryRoute;
        secondaryRoute = props.route.activeOrders.secondaryButton.secondaryRoute;
          break;
      case '/manage-strains':
      case '/add-strain':
        primaryTitle = props.route.manageStrains.primaryButton.title;
        secondaryTitle = props.route.manageStrains.secondaryButton.title;
        primaryActive = props.route.manageStrains.primaryButton.primaryActive;
        secondaryActive = props.route.manageStrains.secondaryButton.secondaryActive;
        primaryRoute = props.route.manageStrains.primaryButton.primaryRoute;
        secondaryRoute = props.route.manageStrains.secondaryButton.secondaryRoute;
          break;
        default:
          primaryTitle = 'Active orders';
          secondaryTitle = 'Manage orders';
    }

    var primaryClass = classNames({
      'mini-nav-button': true,
      'primary-active': primaryActive,
      'inactive-route': !primaryActive
    });
    var secondaryClass = classNames({
      'mini-nav-button': true,
      'secondary-active': secondaryActive,
      'inactive-route': !secondaryActive
    });

    return [primaryTitle, secondaryTitle, primaryClass, secondaryClass, primaryRoute, secondaryRoute];
}

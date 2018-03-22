import classNames from 'classnames';

export function getNavData(currentPath, props) {
    var primaryTitle , secondaryTitle = '';
    var primaryActive , secondaryActive = '';
    switch(currentPath) {
      case '/signup':
        primaryTitle = props.route.signup.primaryButton.title;
        secondaryTitle = props.route.signup.secondaryButton.title;
        primaryActive = props.route.signup.primaryButton.primaryActive;
        secondaryActive = props.route.signup.secondaryButton.secondaryActive;
        break;
      case '/login':
        primaryTitle = props.route.login.primaryButton.title;
        secondaryTitle = props.route.login.secondaryButton.title;
        primaryActive = props.route.login.primaryButton.primaryActive;
        secondaryActive = props.route.login.secondaryButton.secondaryActive;
          break;
        default:
          primaryTitle = 'Manage strains';
          secondaryTitle = 'Active orders';
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

    return [primaryTitle, secondaryTitle, primaryClass, secondaryClass];
}

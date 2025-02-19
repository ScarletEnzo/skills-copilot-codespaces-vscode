function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'templates/member/skills.html',
    scope: {
      skills: '='
    }
  };
}

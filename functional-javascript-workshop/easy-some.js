function checkUsersValid(goodUsers) {
  return function (submittedUsers) {
    /**
     * prueba si TODOS los elementos en el array pasan la prueba
     * implementada por la función proporcionada.
     */
    return submittedUsers.every(function (submittedUser) {
      /**
       * prueba si AL MENOS UN elemento en el array pasa la prueba
       * implementada por la función proporcionada.
       */
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submittedUser.id;
      })
    })
  };
}

module.exports = checkUsersValid

'use strict';

// Shortcuts to DOM Elements.
const $nameInput = document.getElementById('name');
const $emailInput = document.getElementById('email');
const $ageInput = document.getElementById('age');
const $usersList = document.getElementById('usersList');

/**
 * @description  save object User from document form
 */
/*function saveUser(evt) {
  evt.preventDefault();

  const name = $nameInput.value;
  const email = $emailInput.value;
  const age = $ageInput.value;

  const tRow =
    `
      <tr>
        <th scope="row">key</th>
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
      </tr>
    `;
  $usersList.innerHTML = tRow;

}*/

function saveUser(evt) {
  evt.preventDefault();

  const name = $nameInput.value;
  const email = $emailInput.value;
  const age = $ageInput.value;

  const $node = document.createElement('tr');
  const tRow =
    `
      <tr>
        <th scope="row">key</th>
        <td>${name}</td>
        <td>${email}</td>
        <td>${age}</td>
      </tr>
    `;

    $node.innerHTML = tRow;
    $usersList.appendChild($node)
}
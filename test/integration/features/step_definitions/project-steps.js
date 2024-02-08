import {Given} from '@cucumber/cucumber';

Given('the project should be named {string}', async function (projectName) {
  this.projectName = projectName;
});

Feature: Scaffolder

  Scenario: Scaffold
    Given the project should be named "project-name"
    When the project is scaffolded
    Then the pom file is created

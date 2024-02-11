Feature: Version Control Details

  Scenario: No Details Defined for a repository hosted on GitHub.com
    Given vcs details are not defined in the pom
    And the repository is hosted on github.com
    When the project is lifted
    Then vcs details are defined in the pom

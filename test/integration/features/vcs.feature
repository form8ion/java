Feature: Version Control Details

  Scenario: No Details Defined
    Given vcs details are not defined in the pom
    When the project is lifted
    Then vcs details are defined in the pom

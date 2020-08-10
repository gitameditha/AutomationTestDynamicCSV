        @addTocart
Feature: search and add to cart sku from fabelio websites

As User, I should be able add to cahrt

@PositiveTesting
Scenario: Registrasi using valid email
    Given I go to Web fabelio
    When I click search button
    And I Input sku
    And I waited suggestion shown
    And I search that sku
    And I waited result shown
    And I go to product detail page
    And I add to cart
    
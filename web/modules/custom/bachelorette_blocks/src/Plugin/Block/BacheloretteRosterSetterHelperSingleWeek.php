<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Last Week Results' block.
 *
 * @Block(
 *  id = "roster_setter_helper_single_week",
 *  admin_label = @Translation("Roster Setter Helper Single Week"),
 * )
 */
class BacheloretteRosterSetterHelperSingleWeek extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = rosterSetterHelperSingleWeek();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

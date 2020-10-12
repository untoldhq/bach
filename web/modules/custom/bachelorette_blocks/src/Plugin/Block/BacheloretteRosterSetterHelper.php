<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Last Week Results' block.
 *
 * @Block(
 *  id = "roster_setter_helper",
 *  admin_label = @Translation("Roster Setter Helper"),
 * )
 */
class BacheloretteRosterSetterHelper extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = rosterSetterHelper();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

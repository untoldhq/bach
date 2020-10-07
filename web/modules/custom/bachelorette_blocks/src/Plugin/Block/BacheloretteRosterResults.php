<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Roster Results' block.
 *
 * @Block(
 *  id = "roster_results",
 *  admin_label = @Translation("Roster Results"),
 * )
 */
class BacheloretteRosterResults extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = getRosterResults();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

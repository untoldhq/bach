<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Last Week Results' block.
 *
 * @Block(
 *  id = "roster_last_week_results",
 *  admin_label = @Translation("Last Week Results"),
 * )
 */
class BacheloretteLastWeekResults extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = getLastWeekResults();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

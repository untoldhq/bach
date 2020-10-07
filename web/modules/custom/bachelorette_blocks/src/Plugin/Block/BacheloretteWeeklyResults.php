<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Weekly Results' block.
 *
 * @Block(
 *  id = "weekly_results",
 *  admin_label = @Translation("Weekly Results"),
 * )
 */
class BacheloretteWeeklyResults extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = getWeeklyResults();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

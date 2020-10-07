<?php

namespace Drupal\bachelorette_blocks\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Team Scoring' block.
 *
 * @Block(
 *  id = "team_scoring",
 *  admin_label = @Translation("Team Scoring"),
 * )
 */
class BacheloretteTeamScoring extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $results = getTeamScoring();
    // $top = $handbook_info['top'];
    // $chapters = $handbook_info['chapters'];

    return [
      '#theme' => 'bachelorette_blocks_roster_results',
      '#results' => $results,
    ];
  }
}

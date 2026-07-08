<?php
require_once 'db_config.php';

class PriceManager {
    private $conn;
    private $base_currency = 'INR';
    
    public function __construct($conn) {
        $this->conn = $conn;
    }
    
    public function formatPrice($price) {
        return '₹' . number_format($price, 2, '.', ',');
    }
    
    public function getDynamicPrice($base_price) {
        // Add factors that might affect the price
        $season_multiplier = $this->getSeasonMultiplier();
        $demand_multiplier = $this->getDemandMultiplier();
        $festival_discount = $this->getFestivalDiscount();
        
        $final_price = $base_price * $season_multiplier * $demand_multiplier;
        $final_price = $final_price * (1 - $festival_discount);
        
        return round($final_price, 2);
    }
    
    private function getSeasonMultiplier() {
        $month = date('n');
        // Higher prices during peak shopping seasons
        $peak_months = [10, 11, 12]; // October to December
        return in_array($month, $peak_months) ? 1.1 : 1.0;
    }
    
    private function getDemandMultiplier() {
        // This could be based on real-time analytics
        // For now, using a simple time-based multiplier
        $hour = date('G');
        // Slightly higher prices during peak shopping hours
        return ($hour >= 12 && $hour <= 20) ? 1.05 : 1.0;
    }
    
    private function getFestivalDiscount() {
        // Check for festival seasons
        $festivals = [
            ['name' => 'Diwali', 'start' => '2024-10-25', 'end' => '2024-11-05', 'discount' => 0.15],
            ['name' => 'New Year', 'start' => '2024-12-25', 'end' => '2025-01-05', 'discount' => 0.20],
            // Add more festivals
        ];
        
        $today = date('Y-m-d');
        foreach ($festivals as $festival) {
            if ($today >= $festival['start'] && $today <= $festival['end']) {
                return $festival['discount'];
            }
        }
        return 0;
    }
}
?> 
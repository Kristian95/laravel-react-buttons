<?php

namespace Database\Factories;

use App\Models\Button;
use Illuminate\Database\Eloquent\Factories\Factory;

class ButtonFactory extends Factory
{
    protected $model = Button::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'label' => $this->faker->word(),
            'color' => $this->faker->hexColor(),
            'link' => $this->faker->url(),
        ];
    }
}

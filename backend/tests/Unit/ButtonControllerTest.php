<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Button;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ButtonControllerTest extends TestCase
{
    use RefreshDatabase; // This will reset the database for each test

    /** @test */
    public function it_can_create_a_button()
    {
        $buttonData = [
            'label' => 'Test Button',
            'color' => '#ff5733',
            'link' => 'https://example.com',
        ];

        $button = Button::create($buttonData);

        $this->assertDatabaseHas('buttons', $buttonData);
        $this->assertEquals('Test Button', $button->label);
    }

    /** @test */
    public function it_can_update_a_button()
    {
        $button = Button::factory()->create(); // Create a button using the factory

        $updatedData = [
            'label' => 'Updated Button',
            'color' => '#33ff57',
            'link' => 'https://example.com/updated',
        ];

        $button->update($updatedData);

        $this->assertDatabaseHas('buttons', $updatedData);
        $this->assertEquals('Updated Button', $button->fresh()->label);
    }

    /** @test */
    public function it_can_delete_a_button()
    {
        $button = Button::factory()->create();

        $button->delete();

        $this->assertDeleted($button);
        $this->assertDatabaseMissing('buttons', ['id' => $button->id]);
    }
}

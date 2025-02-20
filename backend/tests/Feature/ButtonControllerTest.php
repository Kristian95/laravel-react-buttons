<?php

namespace Tests\Feature;

use App\Models\Button;
use Tests\TestCase;

class ButtonControllerTest extends TestCase
{
	/**
	 * @return void
	 */
	public function test_index()
	{
		$response = $this->get('/api/buttons');

		$response->assertStatus(200);

		$responseData = json_decode($response->getContent());

		$this->assertIsArray($responseData);
	}

	/**
	 * @return void
	 */
	public function test_create()
	{
		$data = [
			'color' => 'red',
			'hyperlink' => 'https://www.example35.com/',
		];
		$response = $this->post('/api/buttons', $data);

		$responseData = json_decode($response->getContent());

		$this->assertEquals('Button created successfully!', $responseData->message);

		Button::where(['hyperlink' => $data['hyperlink']])->delete();
	}

	public function test_delete()
	{
		$button = Button::create([
			'color' => 'red',
			'hyperlink' => 'https://www.example35.com/'
		]);

		$response = $this->delete('/api/buttons/' . $button->id);

		$responseData = json_decode($response->getContent());

		$this->assertEquals('Button reset configuration successfully.', $responseData->message);

		$button->delete();
	}
}

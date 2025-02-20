<?php

namespace App\Http\Controllers;

use App\Http\Requests\ButtonRequest;
use App\Models\Button;
use Illuminate\Http\JsonResponse;

class ButtonController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(Button::all());
    }

    /**
     * @param ButtonRequest $request
     * @param $id
     * @return JsonResponse
     */
    public function storeOrUpdate(ButtonRequest $request): JsonResponse
    {
		$id = $request->get('id') ?? 0;
        $button = Button::updateOrCreate(
            ['id' => $id],
            [
                'color' => $request->input('color'),
                'hyperlink'  => $request->input('hyperlink'),
            ]
        );

        return response()->json([
            'message' => $id ? 'Button updated successfully!' : 'Button created successfully!',
            'button'  => $button
        ]);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $button = Button::findOrFail($id);
        $button->hyperlink = null;
        $button->save();

        return response()->json(['message' => 'Button reset configuration successfully.']);
    }

}

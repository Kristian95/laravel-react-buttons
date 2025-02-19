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
    public function storeOrUpdate(ButtonRequest $request, $id = null): JsonResponse
    {
        $button = Button::updateOrCreate(
            ['id' => $id],
            [
                'label' => $request->input('label'),
                'color' => $request->input('color'),
                'link'  => $request->input('link'),
            ]
        );

        return response()->json([
            'message' => $id ? 'Button updated successfully!' : 'Button created successfully!',
            'button'  => $button
        ]);
    }

    public function update(ButtonRequest $request, $id): JsonResponse
    {
        $button = Button::findOrFail($id);
        $button->color = $request->color;
        $button->hyperlink = $request->hyperlink;
        $button->save();

        return response()->json(['message' => 'Button updated successfully.']);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        $button = Button::findOrFail($id);
        $button->delete();

        return response()->json(['message' => 'Button deleted successfully.']);
    }

}

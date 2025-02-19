<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ButtonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'label' => 'required|string|max:255',
            'color' => 'required|string|max:50',
            'link'  => 'required|url',
        ];
    }

    /**
     * @return string[]
     */
    public function messages(): array
    {
        return [
            'label.required' => 'The button label is required.',
            'label.string'   => 'The button label must be a string.',
            'label.max'      => 'The button label must not exceed 255 characters.',
            'color.required' => 'The button color is required.',
            'color.string'   => 'The button color must be a string.',
            'color.max'      => 'The button color must not exceed 50 characters.',
            'link.required'  => 'The button link is required.',
            'link.url'       => 'The button link must be a valid URL.',
        ];
    }
}

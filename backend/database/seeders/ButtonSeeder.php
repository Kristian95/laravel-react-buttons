<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ButtonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('buttons')->insert([
            ['color' => 'red', 'hyperlink' => 'https://example.com', 'created_at' => NOW()],
            ['color' => 'blue', 'hyperlink' => 'https://example2.com', 'created_at' => NOW()],
            ['color' => 'green', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'yellow', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'pink', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'green', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'red', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'blue', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
            ['color' => 'yellow', 'hyperlink' => 'https://example3.com', 'created_at' => NOW()],
        ]);
    }
}

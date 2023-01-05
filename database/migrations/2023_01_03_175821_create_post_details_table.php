<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_details', function (Blueprint $table) {
            $table->id('post_details_id');
            $table->foreignId('user_info_id')->constrained('user_infos', 'user_info_id');
            $table->text('post_description');
            $table->text('price_description');
            $table->timestamp('time_description');
            $table->string('item_weight', 20);
            $table->string('post_status', 20);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_details');
    }
};

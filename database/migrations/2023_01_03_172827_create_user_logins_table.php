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
        Schema::create('user_logins', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('email', 50)->unique();
            $table->string('password', 250);
            $table->boolean('buyer_account', 1)->default(0);
            $table->boolean('seller_account', 1)->default(0);
            $table->string('user_type', 20);
            $table->string('account_status', 10)->default('inactive');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_logins');
    }
};

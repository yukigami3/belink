<?php

use App\Link;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Schema;

class MigrateActiveColValueInLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Link::chunkById(500, function(Collection $links) {
            Link::whereIn('id', $links->pluck('id'))->update(['active' => DB::raw('ABS(active - 1)')]);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

<?php

namespace App\Listeners;

use App\Link;
use Common\Domains\DeletedCustomDomains;

class DetachDeletedCustomDomains
{
    public function handle(DeletedCustomDomains $event)
    {
        Link::whereIn('domain_id', $event->domainIds)->update(['domain_id' => null]);
    }
}

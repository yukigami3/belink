<?php

namespace App\Exceptions;

use Common\Core\Exceptions\BaseExceptionHandler;

class Handler extends BaseExceptionHandler
{
    protected $dontReport = [LinkRedirectFailed::class];
}

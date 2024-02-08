<?php

namespace TaskToDo;
use TaskToDo\API\Tasktodo;

class Api
{
    function __construct(){
        add_action( 'rest_api_init', [$this, 'register_api']);
    }

    public function register_api(){
        $tasktodo = new Tasktodo();
        $tasktodo->register_routes();
    }

}
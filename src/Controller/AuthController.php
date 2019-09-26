<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AuthController
{
    private $credentialsDB = [
        'me@nejibem.io' => 'password1',
        'info@benjaminmooney.me' => 'password2',
        'luke@skywalker.com' => 'luke',
        'darth@skywalker.com' => 'darth',
    ];

    /**
     * @Route("/email", name="email")
     */
    public function __invoke(Request $request)
    {
        $auth = false;
        $email = $request->request->get('email');
        $password = $request->request->get('password');

        if(isset($this->credentialsDB[$email]) && $this->credentialsDB[$email] === $password)
        {
            $auth = true;
        }

        return new JsonResponse([
            'auth_successful' => $auth,
        ]);
    }

}

<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Environment as Twig;

class DefaultController
{
    private $twig;

    public function __construct(Twig $twig) {
        $this->twig = $twig;
    }

    /**
     * @Route("/", name="index")
     */
    public function __invoke()
    {
        return new Response($this->twig->render('default/index.html.twig'));
    }
}

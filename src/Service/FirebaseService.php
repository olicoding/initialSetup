<?php

namespace App\Service;

use Google\Cloud\Firestore\FirestoreClient;
use Kreait\Firebase\Factory;

class FirebaseService
{
    private $firestore;

    public function __construct()
    {
        $this->firestore = new FirestoreClient();
    }

    public function getFirestore()
    {
        return $this->firestore;
    }
}

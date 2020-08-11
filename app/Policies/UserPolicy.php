<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function viewOwnedBoards(User $user, User $viewer)
    {
        return $user->id == $viewer->id;
    }
}

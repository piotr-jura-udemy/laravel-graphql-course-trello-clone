<?php

namespace App\Policies;

use App\CardList;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CardListPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\CardList  $cardList
     * @return mixed
     */
    public function view(User $user, CardList $cardList)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\CardList  $cardList
     * @return mixed
     */
    public function update(User $user, CardList $cardList)
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\CardList  $cardList
     * @return mixed
     */
    public function delete(User $user, CardList $cardList)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\CardList  $cardList
     * @return mixed
     */
    public function restore(User $user, CardList $cardList)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\CardList  $cardList
     * @return mixed
     */
    public function forceDelete(User $user, CardList $cardList)
    {
        //
    }

    public function createCard(User $user, CardList $cardList)
    {
        return $user->id === $cardList->board->owner_id;
    }
}

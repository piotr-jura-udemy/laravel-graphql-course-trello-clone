<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Card extends Model
{
    protected $fillable = ['title', 'order', 'list_id', 'owner_id'];

    public function list(): BelongsTo
    {
        return $this->belongsTo(CardList::class, 'list_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}

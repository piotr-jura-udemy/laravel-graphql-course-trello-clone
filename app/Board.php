<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Auth;

class Board extends Model
{
    protected $fillable = ['title', 'color', 'owner_id'];

    public function lists(): HasMany
    {
        return $this->hasMany(CardList::class, 'board_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    protected static function booted()
    {
        static::creating(function (Board $board) {
            if (Auth::user()) {
                $board->owner()->associate(Auth::user());
            }
        });
    }
}

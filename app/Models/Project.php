<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\{Team,ProgressProject};

class Project extends Model
{
    protected $table        = "project";
    public $timestamps      = false;

    protected $fillable     = [
        'id',
        'team_id',
        'name',
        'description',
        'status'
    ];

    public function progress()
    {
        return $this->hasMany(ProgressProject::class)->orderBy('id','ASC');
    }

    public function team()
    {
        return $this->hasOne(Team::class, 'id', 'team_id');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function($query, $search) {
            $query->where('name','ilike','%'.$search.'%');
        });
    }
}

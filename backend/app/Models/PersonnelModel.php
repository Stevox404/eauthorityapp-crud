<?php namespace App\Models;

use CodeIgniter\Model;

class PersonnelModel extends Model {
    protected $table = 'personnel';
    protected $primaryKey = 'personnel_id';
    protected $allowedFields = ['name', 'email', 'phone'];

    public function getPersonnel(){
        return $this->findAll(); 
    }
}
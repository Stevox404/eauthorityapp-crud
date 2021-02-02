<?php namespace App\Controllers;

use App\Models\PersonnelModel;

class Personnel extends BaseController {
    public function index() {
        $model = new PersonnelModel();
        $data = $model->getPersonnel();
        return json_encode($data);        
    }

    public function save() {
        $model = new PersonnelModel();
        try {
            $model->save($this->request->getJson(true));
        } catch (\Exception $err) {
            $msg = $err->getMessage();
            if($err->getCode()){
                $msg = 'Error: User Already Exists';
            }
            print($msg);
            $this->response->setStatusCode(422);
        }
    }

    public function delete() {
        $model = new PersonnelModel();
        $model->delete($this->request->getJson(true)['personnel_id']);
    }
}
<?php
    class Partake_prize_manModel extends RelationModel{
	protected $_link = array(
        //关联角色
	    'partake' => array(
            'mapping_type' => BELONGS_TO,
            'class_name' => 'partake',
            'foreign_key' => 'pid',
        )
    );
}

?>
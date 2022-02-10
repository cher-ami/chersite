<?php

namespace CherAmi\block;
use CherAmi\helpers\BlockHelper;

class TestBlockBlockController
{
    const BLOCK_NAME = BlockTypes::TEST_BLOCK;

    public static function format($data): ?array
    {
        return [
            "blockType" => self::BLOCK_NAME,
            "blockData" => null
        ];
    }

}
